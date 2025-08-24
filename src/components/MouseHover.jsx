import React, { useEffect, useState, useRef } from "react";
import "./css/MouseHover.css";

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursor1Position, setCursor1Position] = useState({ x: 0, y: 0 });
  const [cursor2Position, setCursor2Position] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringText, setIsHoveringText] = useState(false);
  const [isHoveringCard, setIsHoveringCard] = useState(false);
  const [hasHoverCapability, setHasHoverCapability] = useState(true);
  const requestRef = useRef();

  // Check if device has hover capability
  useEffect(() => {
    const checkHoverCapability = () => {
      return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    };

    setHasHoverCapability(checkHoverCapability());

    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const handleChange = () => setHasHoverCapability(mediaQuery.matches);
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Smooth cursor following animation
  useEffect(() => {
    if (!hasHoverCapability) return;

    const animate = () => {
      setCursor1Position((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.1,
        y: prev.y + (mousePosition.y - prev.y) * 0.1,
      }));

      setCursor2Position((prev) => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.15,
        y: prev.y + (mousePosition.y - prev.y) * 0.15,
      }));

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mousePosition, hasHoverCapability]);

  useEffect(() => {
    // Don't add event listeners if no hover capability
    if (!hasHoverCapability) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if hovering over a project card
      const isCard = e.target.closest('.notification, .card, [class*="project"]') !== null;
      
      if (isCard) {
        setIsHoveringCard(true);
        setIsHovering(false);
        setIsHoveringText(false);
        return;
      }

      // Check if the element is inside a button or link first
      const isInsideInteractive = e.target.closest("a, button") !== null;

      // Check if hovering over interactive elements including tooltips
      const interactiveElements = [
        "A",
        "BUTTON",
        "INPUT",
        "TEXTAREA",
        "SELECT",
      ];

      const isInteractive = interactiveElements.includes(e.target.tagName);

      if (isInteractive || isInsideInteractive) {
        setIsHovering(true);
        setIsHoveringText(false);
        setIsHoveringCard(false);
      } else {
        setIsHovering(false);
        setIsHoveringText(false);
        setIsHoveringCard(false);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setIsHoveringText(false);
      setIsHoveringCard(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [hasHoverCapability]);

  // Don't render cursors on touch devices
  if (!hasHoverCapability) {
    return null;
  }

  const cursor1Style = {
    left: `${cursor1Position.x}px`,
    top: `${cursor1Position.y}px`,
  };

  const cursor2Style = {
    left: `${cursor2Position.x}px`,
    top: `${cursor2Position.y}px`,
  };

  return (
    <div className="cursor-effect-container">
      <div
        className={`cursor ${isHovering ? "hovering" : ""} ${isHoveringText ? "hovering-text" : ""} ${isHoveringCard ? "hovering-card" : ""}`}
        style={cursor1Style}
      >
        {isHoveringCard && <span className="cursor-text"><span className="texthilit1">#</span>view</span>}
      </div>
      <div
        className={`cursor2 ${isHovering ? "hovering" : ""} ${isHoveringText ? "hovering-text" : ""} ${isHoveringCard ? "hovering" : ""}`}
        style={cursor2Style}
      ></div>
    </div>
  );
};

export default CursorEffect;
