import React from 'react'

function Studentscreen () {
  const [Student, setStudents] = React.
  useState([
    {
    "id": 1,
    "name": "Aarav Sharma",
    "phone": "+91-9876543210",
    "email": "aarav.sharma@example.com",
    "dob": "1998-04-15",
    "createdAt": "2026-01-10T09:30:00Z",
    "updatedAt": "2026-01-15T11:45:00Z"
  },
  {
    "id": 2,
    "name": "Priya Patel",
    "phone": "+91-9876543211",
    "email": "priya.patel@example.com",
    "dob": "1996-08-22",
    "createdAt": "2026-01-12T10:15:00Z",
    "updatedAt": "2026-01-18T14:20:00Z"
  },
  {
    "id": 3,
    "name": "Rahul Verma",
    "phone": "+91-9876543212",
    "email": "rahul.verma@example.com",
    "dob": "1995-02-10",
    "createdAt": "2026-02-01T08:45:00Z",
    "updatedAt": "2026-02-05T12:30:00Z"
  },
  {
    "id": 4,
    "name": "Sneha Gupta",
    "phone": "+91-9876543213",
    "email": "sneha.gupta@example.com",
    "dob": "2000-11-05",
    "createdAt": "2026-02-08T13:20:00Z",
    "updatedAt": "2026-02-10T16:10:00Z"
  },
  {
    "id": 5,
    "name": "Vikram Singh",
    "phone": "+91-9876543214",
    "email": "vikram.singh@example.com",
    "dob": "1993-06-18",
    "createdAt": "2026-03-03T07:30:00Z",
    "updatedAt": "2026-03-07T09:15:00Z"
  },
  {
    "id": 6,
    "name": "Ananya Mehta",
    "phone": "+91-9876543215",
    "email": "ananya.mehta@example.com",
    "dob": "1999-09-12",
    "createdAt": "2026-03-12T11:00:00Z",
    "updatedAt": "2026-03-16T15:40:00Z"
  },
  {
    "id": 7,
    "name": "Rohan Joshi",
    "phone": "+91-9876543216",
    "email": "rohan.joshi@example.com",
    "dob": "1997-01-28",
    "createdAt": "2026-04-05T06:50:00Z",
    "updatedAt": "2026-04-09T10:25:00Z"
  },
  {
    "id": 8,
    "name": "Kavya Reddy",
    "phone": "+91-9876543217",
    "email": "kavya.reddy@example.com",
    "dob": "2001-03-14",
    "createdAt": "2026-05-14T14:10:00Z",
    "updatedAt": "2026-05-20T17:35:00Z"
  },
  {
    "id": 9,
    "name": "Arjun Malhotra",
    "phone": "+91-9876543218",
    "email": "arjun.malhotra@example.com",
    "dob": "1994-12-03",
    "createdAt": "2026-06-02T09:00:00Z",
    "updatedAt": "2026-06-06T12:45:00Z"
  },
  {
    "id": 10,
    "name": "Isha Kapoor",
    "phone": "+91-9876543219",
    "email": "isha.kapoor@example.com",
    "dob": "1998-07-25",
    "createdAt": "2026-07-11T12:25:00Z",
    "updatedAt": "2026-07-15T16:50:00Z"
  },
  {
    "id": 11,
    "name": "Aditya Jain",
    "phone": "+91-9876543220",
    "email": "aditya.jain@example.com",
    "dob": "1996-05-09",
    "createdAt": "2026-08-19T08:10:00Z",
    "updatedAt": "2026-08-24T11:30:00Z"
  },
  {
    "id": 12,
    "name": "Meera Nair",
    "phone": "+91-9876543221",
    "email": "meera.nair@example.com",
    "dob": "2002-10-17",
    "createdAt": "2026-09-22T15:40:00Z",
    "updatedAt": "2026-09-28T18:00:00Z"
  }
  ])

  return (
      
    <div> 
      <table border="1" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Dob</th>
            <th>Email</th>
          </tr>
        </thead>
      {Student.map((sRow) => (
        <tbody>
          <tr>
            <td>{sRow.id}</td>
            <td>{sRow.name}</td>
            <td>{sRow.phone}</td>
            <td>{sRow.dob}</td>
            <td>{sRow.email}</td>
          </tr>
        </tbody>

  ))}
      </table>
    </div>
    )}


export default Studentscreen