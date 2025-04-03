import React, { useState } from 'react';
import { axiosInstance } from '@/lib/axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AddStudent = ({ fetchStudents }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.post('/students', { name, rollNo });
    setName('');
    setRollNo('');
    fetchStudents();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-4 pb-0">
      <div className="flex space-x-2 py-2 mb-4">
        <h2 className="text-xl font-bold mt-1">New?</h2>
        <Input
          type="text"
          placeholder="Roll No"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          required
        />
        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
};

export default AddStudent;
