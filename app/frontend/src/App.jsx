import React, { useEffect, useState } from 'react';
import { axiosInstance } from '@/lib/axios';
import StudentTable from '@/components/page-components/StudentTable';
import AddStudent from '@/components/page-components/AddStudent';

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const response = await axiosInstance.get('/students/all');
    setStudents(response.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center">Student Management</h1>
      <h3></h3>
      <AddStudent fetchStudents={fetchStudents} />
      <StudentTable students={students} fetchStudents={fetchStudents} />
    </div>
  );
}

export default App;
