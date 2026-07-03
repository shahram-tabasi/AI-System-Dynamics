const engine = new SimulationEngine(SimulationFactory.createInitialState());

engine.run(10, DummyAI.decide);

console.log(engine.getHistory());
