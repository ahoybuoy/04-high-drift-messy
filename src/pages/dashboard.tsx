import React from 'react';
import { SecondaryHeader } from '../components/Header';
import { Table, StripedTable } from '../components/Table';
import { Tabs } from '../components/Navigation';
import { ProgressBar, CircularProgress } from '../components/Progress';
import { Alert, ToastAlert } from '../components/Alert';
import { Avatar, AvatarGroup } from '../components/Avatar';
import { Spinner, DotsSpinner } from '../components/Spinner';

// DRIFT: Dashboard with completely inconsistent components

export default function DashboardPage() {
  const tableData = [
    { id: '1', name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'Pending' },
    { id: '3', name: 'Bob Wilson', email: 'bob@example.com', status: 'Inactive' },
  ];

  const columns = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'status', header: 'Status' },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f1f5f9' }}>
      <SecondaryHeader />

      <main style={{ padding: '29px 37px' }}>
        {/* Stats cards - inconsistent styling */}
        <div className="grid grid-cols-4 gap-[21px] mb-[31px]">
          <div style={{
            backgroundColor: 'white',
            padding: '23px',
            borderRadius: '10px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <p style={{ color: '#64748b', fontSize: '13px', marginBottom: '7px' }}>Total Users</p>
            <p style={{ color: '#0f172a', fontSize: '31px', fontWeight: 'bold', margin: 0 }}>12,847</p>
            <span className="text-[#10b981] text-[12px]">+12.5% from last month</span>
          </div>
          <div className="bg-white p-[21px] rounded-[8px] shadow-sm">
            <p className="text-[#64748b] text-[12px] mb-[6px]">Revenue</p>
            <p className="text-[#0f172a] text-[29px] font-bold m-0">$84,254</p>
            <span style={{ color: '#ef4444', fontSize: '11px' }}>-3.2% from last month</span>
          </div>
          <div style={{
            backgroundColor: '#ffffff',
            padding: '19px 23px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}>
            <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '9px' }}>Active Projects</p>
            <p style={{ color: '#1f2937', fontSize: '27px', fontWeight: '700', margin: 0 }}>43</p>
          </div>
          <div className="bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] p-[23px] rounded-[10px] text-white">
            <p className="text-white/80 text-[13px] mb-[7px]">Premium Users</p>
            <p className="text-[33px] font-bold m-0">2,847</p>
          </div>
        </div>

        {/* Alert */}
        <div style={{ marginBottom: '27px' }}>
          <Alert type="warning">
            Your trial expires in 5 days. <a href="#" style={{ color: 'inherit', fontWeight: '600' }}>Upgrade now</a>
          </Alert>
        </div>

        {/* Progress section */}
        <div className="grid grid-cols-2 gap-[25px] mb-[33px]">
          <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px' }}>
            <h3 style={{ fontSize: '17px', color: '#1f2937', marginBottom: '19px' }}>Project Progress</h3>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                <span style={{ fontSize: '13px', color: '#6b7280' }}>Website Redesign</span>
                <span style={{ fontSize: '12px', color: '#1f2937' }}>75%</span>
              </div>
              <ProgressBar value={75} />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                <span style={{ fontSize: '13px', color: '#6b7280' }}>Mobile App</span>
                <span style={{ fontSize: '12px', color: '#1f2937' }}>45%</span>
              </div>
              <ProgressBar value={45} />
            </div>
          </div>
          <div className="bg-white p-[23px] rounded-[10px] flex items-center justify-around">
            <div className="text-center">
              <CircularProgress value={82} />
              <p className="mt-[11px] text-[13px] text-[#6b7280]">Tasks Done</p>
            </div>
            <div className="text-center">
              <CircularProgress value={63} size={80} />
              <p className="mt-[11px] text-[13px] text-[#6b7280]">Goals Met</p>
            </div>
          </div>
        </div>

        {/* Table section */}
        <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '23px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '21px' }}>
            <h3 style={{ margin: 0, fontSize: '18px', color: '#0f172a' }}>Recent Users</h3>
            <AvatarGroup avatars={['/avatar1.jpg', '/avatar2.jpg', '/avatar3.jpg', '/avatar4.jpg', '/avatar5.jpg']} />
          </div>
          <Table columns={columns} data={tableData} />
        </div>
      </main>

      <ToastAlert message="Changes saved successfully!" variant="success" />
    </div>
  );
}
