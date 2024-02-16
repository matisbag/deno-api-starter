class Dinosaur {
  id?: number;
  name: string;
  description: string;

  constructor(dinosaurData: { id?: number; username: string; email: string }) {
    this.id = dinosaurData.id;
    this.name = dinosaurData.username;
    this.description = dinosaurData.email;
  }
}

export default Dinosaur;
