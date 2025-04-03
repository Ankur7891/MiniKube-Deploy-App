import React from 'react';
import { axiosInstance } from '@/lib/axios';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';

const StudentTable = ({ students, fetchStudents }) => {
  const deleteStudent = async (id) => {
    await axiosInstance.delete(`/students/${id}`);
    fetchStudents();
  };

  return (
    <div className="w-full px-4">
      <Table className="border border-primary">
        <TableHeader>
          <TableRow className="bg-primary hover:bg-primary/80">
            <TableHead className="w-32 ps-4">Roll No</TableHead>
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="pe-4 text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student._id}>
              <TableCell className="ps-4">{student.rollNo}</TableCell>
              <TableCell className="text-center">{student.name}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => deleteStudent(student._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentTable;
