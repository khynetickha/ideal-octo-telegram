class Chain {
   constructor(BodyA, BodyB)
   {
      var options = {
         BodyA : BodyA,
         BodyB : BodyB,
         stiffness : 0.04,
         length : 10
      }
      this.chain = Constraint.create(options);
      World.add(world, this.chain);
   }
   display()
   {
      var pointA = this.chain.BodyA.position;
      var pointB = this.chain.BodyB.position;
      strokeweight(4);
      line(pointA.x,pointA.y,pointB.x,pointB.y);
   }
}