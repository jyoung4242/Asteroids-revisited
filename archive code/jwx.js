// lib/vector.js
class Vector {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add(delta, update = false) {
    const vector = update ? this : new Vector(this.x, this.y);
    vector.x += delta.x;
    vector.y += delta.y;
    return vector;
  }
  multiply(delta, update = false) {
    const vector = update ? this : new Vector(this.x, this.y);
    const deltaVector = delta instanceof Vector ? delta : new Vector(delta, delta);
    vector.x *= deltaVector.x;
    vector.y *= deltaVector.y;
    return vector;
  }
}

// lib/entity.js
class Entity {
  constructor(id) {
    this.id = id;
  }

  static create(entityData, systems) {
    const entity = new Entity(entityData.id);
    for (const [component, data] of Object.entries(entityData.components)) {
      Component.assignTo(entity, component, data);
    }
    systems.forEach(system => {
      if (system.processEntity(entity)) {
        system.addEntity(entity);
      }
    });
    return entity;
  }

  destroy(systems) {
    systems.forEach(system => {
      system.removeEntity(this);
    });
  }
}
//Components;
// lib/component.js
class Component {
  static components = {};

  constructor(name, type, assignValue = false) {
    this.name = name;
    this.assignValue = assignValue;
    Component.components[name] = type;
  }

  static assignTo(entity, name, data) {
    const component = name != null ? new Component.components[name]() : new this();
    component.define(data);
    Object.assign(entity, { [component.name]: component.assignValue ? component.value : component });
  }

  define(data) {}
}

// components/position.js
class Position extends Component {
  constructor() {
    super("position", Position, true);
    this.value = new Vector();
  }

  define(data) {
    if (data != null) {
      this.value.x = data.x;
      this.value.y = data.y;
    }
  }
}
// Initializes and registers the component as a Component (there are better ways but this will do for now)
new Position();

// components/velocity.js
class Velocity extends Component {
  constructor() {
    super("velocity", Velocity, true);
    this.value = new Vector();
  }

  define(data) {
    if (data != null) {
      this.value.x = data.x;
      this.value.y = data.y;
    }
  }
}
// Initializes and registers the component as a Component (there are better ways but this will do for now)
new Velocity();

// components/render.js
class Render extends Component {
  constructor() {
    super("render", Render);
  }
}
// Initializes and registers the component as a Component (there are better ways but this will do for now)
new Render();
//Systems;
// lib/system.js
class System {
  entities = [];

  constructor(name) {
    this.name = name;
  }

  processEntity(entity) {
    return entity[this.name] != null;
  }

  addEntity(entity) {
    this.entities.push(entity);
  }
  removeEntity(entity) {
    const index = this.entities.indexOf(entity);
    if (index > -1) {
      this.entities.splice(index, 1);
    }
  }
}

// systems/movement.js
class MovementSystem extends System {
  constructor() {
    super("movement");
  }

  processEntity(entity) {
    return entity.position != null && entity.velocity != null;
  }

  update(deltaTime) {
    this.entities.forEach(entity => {
      console.log("MovementSystem processing entity", entity.id);
      entity.position.add(entity.velocity.multiply(deltaTime), true);
    });
  }
}

// systems/render.js
class RenderSystem extends System {
  constructor() {
    super("render");
  }

  update(deltaTime) {
    this.entities.forEach(entity => {
      console.log(`Render processing entity ${entity.id}: ${entity.position.x}, ${entity.position.y}`, entity);
    });
  }
}
//Main and game loop (far from complete)
// main.js
const systems = [new MovementSystem(), new RenderSystem()];
const entities = [];

// Get this from a file or api or something
const entitiesData = [
  { id: "one", components: { position: { x: 100, y: 100 }, velocity: { x: 150, y: 100 }, render: {} } },
  { id: "two", components: { position: { x: 200, y: 100 }, velocity: { x: 150, y: -100 }, render: {} } },
  { id: "three", components: { position: { x: 300, y: 150 }, velocity: { x: -150, y: -200 }, render: {} } },
  { id: "four", components: { position: { x: 300, y: 250 }, render: {} } }, // Since no velocity, MovementSystem will skip this
];

entitiesData.forEach(entityData => {
  entities.push(Entity.create(entityData, systems));
});

// This is an _example_ game loop to illustrate. It needs additional work or even a rewrite.
function gameLoop(deltaTime) {
  systems.forEach(system => {
    system.update(deltaTime);
  });
}
// Just run the game loop a couple of times to verify values
for (let i = 0; i < 3; i++) {
  gameLoop(0.16);
}

// Destroy an entity (a _must_ now to make sure it's removed from systems)
const entity = entities.shift();
entity.destroy(systems);
console.log(`====== ${entity.id} removed`);

// Verify that the entity is no longer process
for (let i = 0; i < 3; i++) {
  gameLoop(0.16);
}
