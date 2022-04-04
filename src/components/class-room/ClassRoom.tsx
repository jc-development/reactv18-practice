import { Component } from 'react';

type ClassRoomProps = {
  count: number;
};

type ClassRoomState = {
  studentsCount: number;
};

export default class ClassRoom extends Component<ClassRoomProps, ClassRoomState> {
  constructor(props: ClassRoomProps) {
    super(props);
    
    this.state = {
      studentsCount: 0
    };
  
    this.addStudent = this.addStudent.bind(this);
  }

  addStudent() {
    this.setState(
      (prevState) => {
        return { studentsCount: prevState.studentsCount + 1 }
      }
    );
  }

  render() {
    return (
      <div>
        <p>Number of students in class room: {this.state.studentsCount}</p>
        <button onClick={(this.addStudent)}>Add Student</button>
      </div>
    );
  }

}