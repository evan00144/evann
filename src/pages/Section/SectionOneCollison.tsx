import {
  Bodies,
  Composite,
  Engine,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
} from "matter-js";

import { useEffect } from "react";

export default function SectionOneCollison() {
  useEffect(() => {
    // Create a Matter.js engine
    const engine = Engine.create();

    // Create a renderer
    const render = Render.create({
      element: document.getElementById("canvas-container") as HTMLElement,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        background: "#000000",
        showAngleIndicator: true,
      },
    });
    Render.run(render);

    const runner = Runner.create();

    Runner.run(runner, engine);

    // Create a physics body (rectangle)
    const boxA = Bodies.rectangle(20, 20, 20, 20);
    const boxB = Bodies.rectangle(100, 100, 100, 100);

    Composite.add(engine.world, [
      boxA,
      boxB,
      Bodies.rectangle(100, 100, 100, 100),
      Bodies.rectangle(100, 100, 100, 100),
      Bodies.rectangle(100, 100, 100, 100),
      Bodies.rectangle(100, 100, 100, 100),
      Bodies.rectangle(100, 100, 100, 100),
    ]);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.5,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(engine.world, [
      // walls
      Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
      Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
    ]);

    Composite.add(engine.world, mouseConstraint);

    render.mouse = mouse;
    // Render.lookAt(render, {
    //     min: { x: 0, y: 0 },
    //     max: { x: 200, y: 900 }
    // });

    Render.run(render);

    // Clean up on unmount
    return () => {
      Engine.clear(engine);
      Render.stop(render);
    };
  }, []);

  return (
    <div>
      <div id="canvas-container" className="canvas-container"></div>
    </div>
  );
}
