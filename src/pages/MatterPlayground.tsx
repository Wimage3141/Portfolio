import { useEffect, useRef } from "react";
import { Engine, Render, Runner, Bodies, Composite } from "matter-js";

function MatterPlayground() {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const engine = Engine.create();

    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: "#2c2d2e",
      },
    });

    const boxA = Bodies.rectangle(400, 200, 80, 80);
    const boxB = Bodies.rectangle(450, 50, 80, 80);
    const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

    Composite.add(engine.world, [boxA, boxB, ground]);

    Render.run(render);

    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return (
    <main className="page">
      <div ref={sceneRef} />
    </main>
  );
}

export default MatterPlayground;
