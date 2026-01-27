"use client";

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import { useRouter } from 'next/navigation';
import { FaChartPie, FaUserGraduate, FaEnvelope, FaComments, FaSignOutAlt, FaTrash, FaBars, FaTimes } from 'react-icons/fa';

export default function AdminDashboard() {
    const router = useRouter();
    const [contacts, setContacts] = useState<any[]>([]);
    const [enrollments, setEnrollments] = useState<any[]>([]);
    const [consultations, setConsultations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeView, setActiveView] = useState('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
            return;
        }

        const fetchData = async () => {
            try {
                // Fetch Enrollments
                const enrollRes = await fetch('http://localhost:5001/api/enroll', {
                    headers: { 'x-auth-token': token }
                });
                if (enrollRes.status === 401 || enrollRes.status === 403) {
                    router.push('/login');
                    return;
                }
                const enrollData = await enrollRes.json();
                setEnrollments(enrollData);

                // Fetch Contacts
                const contactRes = await fetch('http://localhost:5001/api/contact', {
                    headers: { 'x-auth-token': token }
                });
                const contactData = await contactRes.json();
                setContacts(contactData);

                // Fetch Consultations
                const consultRes = await fetch('http://localhost:5001/api/consultation', {
                    headers: { 'x-auth-token': token }
                });
                const consultData = await consultRes.json();
                setConsultations(consultData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/login');
    };

    const handleDelete = async (id: string, type: 'enroll' | 'contact' | 'consultation') => {
        if (!confirm('Are you sure you want to delete this item?')) return;

        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`http://localhost:5001/api/${type}/${id}`, {
                method: 'DELETE',
                headers: { 'x-auth-token': token || '' }
            });

            if (res.ok) {
                if (type === 'enroll') {
                    setEnrollments(prev => prev.filter(item => item._id !== id));
                } else if (type === 'contact') {
                    setContacts(prev => prev.filter(item => item._id !== id));
                } else if (type === 'consultation') {
                    setConsultations(prev => prev.filter(item => item._id !== id));
                }
            } else {
                alert('Failed to delete item');
            }
        } catch (error) {
            console.error(error);
            alert('Error deleting item');
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-slate-50">
                <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    const MenuItem = ({ id, icon: Icon, label, count }: any) => (
        <button
            onClick={() => { setActiveView(id); setIsSidebarOpen(false); }}
            className={`w-full flex items-center justify-between px-6 py-4 transition-colors ${activeView === id
                ? 'bg-red-50 text-red-600 border-r-4 border-red-600'
                : 'text-slate-600 hover:bg-slate-50'
                }`}
        >
            <div className="flex items-center gap-3">
                <Icon size={20} />
                <span className="font-medium">{label}</span>
            </div>
            {count !== undefined && (
                <span className={`text-xs px-2 py-1 rounded-full ${activeView === id ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-600'}`}>
                    {count}
                </span>
            )}
        </button>
    );

    return (
        <div className="flex min-h-screen bg-slate-50 font-sans">
            {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transform transition-transform duration-200 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                }`}>
                <div className="p-6 border-b border-slate-200 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-slate-900">Admin<span className="text-red-600">Panel</span></h2>
                    <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-slate-500">
                        <FaTimes size={24} />
                    </button>
                </div>

                <nav className="mt-6 flex-1">
                    <MenuItem id="overview" icon={FaChartPie} label="Dashboard" />
                    <MenuItem id="enrollments" icon={FaUserGraduate} label="Enrollments" count={enrollments.length} />
                    <MenuItem id="contacts" icon={FaEnvelope} label="Messages" count={contacts.length} />
                    <MenuItem id="consultations" icon={FaComments} label="Consultations" count={consultations.length} />
                </nav>

                <div className="p-4 border-t border-slate-200">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-6 py-3 text-slate-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                        <FaSignOutAlt size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto h-screen">
                {/* Mobile Header */}
                <header className="lg:hidden bg-white border-b border-slate-200 p-4 flex justify-between items-center sticky top-0 z-30">
                    <h1 className="text-lg font-bold text-slate-900">
                        {activeView.charAt(0).toUpperCase() + activeView.slice(1)}
                    </h1>
                    <button onClick={() => setIsSidebarOpen(true)} className="text-slate-600">
                        <FaBars size={24} />
                    </button>
                </header>

                <div className="p-6 lg:p-10 max-w-7xl mx-auto">
                    {activeView === 'overview' && (
                        <div className="space-y-8">
                            <div>
                                <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard Overview</h1>
                                <p className="text-slate-500">Welcome back, Admin. Here's what's happening today.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                                            <FaUserGraduate size={24} />
                                        </div>
                                        <div className="text-green-500 text-sm font-medium">+12%</div>
                                    </div>
                                    <div className="text-3xl font-bold text-slate-900 mb-1">{enrollments.length}</div>
                                    <div className="text-slate-500 text-sm">Total Enrollments</div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                                            <FaEnvelope size={24} />
                                        </div>
                                        <div className="text-green-500 text-sm font-medium">+5%</div>
                                    </div>
                                    <div className="text-3xl font-bold text-slate-900 mb-1">{contacts.length}</div>
                                    <div className="text-slate-500 text-sm">Contact Messages</div>
                                </div>

                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                                            <FaComments size={24} />
                                        </div>
                                        <div className="text-green-500 text-sm font-medium">+8%</div>
                                    </div>
                                    <div className="text-3xl font-bold text-slate-900 mb-1">{consultations.length}</div>
                                    <div className="text-slate-500 text-sm">Active Consultations</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeView === 'enrollments' && (
                        <div className="space-y-6">
                            <h1 className="text-2xl font-bold text-slate-900">Course Enrollments</h1>
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                <div className="hidden md:block overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead className="bg-slate-50 border-b border-slate-200">
                                            <tr>
                                                <th className="p-4 font-semibold text-slate-700">Date</th>
                                                <th className="p-4 font-semibold text-slate-700">Name</th>
                                                <th className="p-4 font-semibold text-slate-700">Email</th>
                                                <th className="p-4 font-semibold text-slate-700">Phone</th>
                                                <th className="p-4 font-semibold text-slate-700">Course</th>
                                                <th className="p-4 font-semibold text-slate-700">Price</th>
                                                <th className="p-4 font-semibold text-slate-700">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {enrollments.length === 0 ? (
                                                <tr><td colSpan={7} className="p-8 text-center text-slate-500">No enrollments yet</td></tr>
                                            ) : (enrollments.map((item: any) => (
                                                <tr key={item._id} className="hover:bg-slate-50">
                                                    <td className="p-4 text-slate-600 font-mono text-sm">{new Date(item.createdAt).toLocaleDateString()}</td>
                                                    <td className="p-4 font-medium text-slate-900">{item.name}</td>
                                                    <td className="p-4 text-slate-600">{item.email}</td>
                                                    <td className="p-4 text-slate-600">{item.phone}</td>
                                                    <td className="p-4 max-w-xs truncate text-slate-800" title={item.courseTitle}>{item.courseTitle}</td>
                                                    <td className="p-4 font-bold text-red-600">{item.coursePrice}</td>
                                                    <td className="p-4">
                                                        <button onClick={() => handleDelete(item._id, 'enroll')} className="text-red-500 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-lg"><FaTrash /></button>
                                                    </td>
                                                </tr>
                                            )))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="md:hidden divide-y divide-slate-100">
                                    {enrollments.length === 0 ? (
                                        <div className="p-8 text-center text-slate-500">No enrollments yet</div>
                                    ) : (enrollments.map((item: any) => (
                                        <div key={item._id} className="p-4 space-y-3 relative group">
                                            <button onClick={() => handleDelete(item._id, 'enroll')} className="absolute top-4 right-4 text-red-500 hover:text-red-700 p-2"><FaTrash /></button>
                                            <div>
                                                <h3 className="font-semibold text-slate-900">{item.courseTitle}</h3>
                                                <p className="text-xs text-slate-500 font-mono">{new Date(item.createdAt).toLocaleDateString()}</p>
                                            </div>
                                            <div className="text-sm space-y-1 text-slate-600">
                                                <p><span className="font-medium text-slate-800">{item.name}</span></p>
                                                <p>{item.email}</p>
                                                <p>{item.phone}</p>
                                            </div>
                                        </div>
                                    )))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeView === 'contacts' && (
                        <div className="space-y-6">
                            <h1 className="text-2xl font-bold text-slate-900">Contact Messages</h1>
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                <div className="hidden md:block overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead className="bg-slate-50 border-b border-slate-200">
                                            <tr>
                                                <th className="p-4 font-semibold text-slate-700">Date</th>
                                                <th className="p-4 font-semibold text-slate-700">Name</th>
                                                <th className="p-4 font-semibold text-slate-700">Email</th>
                                                <th className="p-4 font-semibold text-slate-700">Interest</th>
                                                <th className="p-4 font-semibold text-slate-700">Message</th>
                                                <th className="p-4 font-semibold text-slate-700">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {contacts.length === 0 ? (
                                                <tr><td colSpan={6} className="p-8 text-center text-slate-500">No messages yet</td></tr>
                                            ) : (contacts.map((item: any) => (
                                                <tr key={item._id} className="hover:bg-slate-50">
                                                    <td className="p-4 text-slate-600 font-mono text-sm">{new Date(item.createdAt).toLocaleDateString()}</td>
                                                    <td className="p-4 font-medium text-slate-900">{item.firstName} {item.lastName}</td>
                                                    <td className="p-4 text-slate-600">{item.email}</td>
                                                    <td className="p-4 text-slate-800">{item.courseInterest}</td>
                                                    <td className="p-4 max-w-md text-slate-600">{item.message}</td>
                                                    <td className="p-4">
                                                        <button onClick={() => handleDelete(item._id, 'contact')} className="text-red-500 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-lg"><FaTrash /></button>
                                                    </td>
                                                </tr>
                                            )))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="md:hidden divide-y divide-slate-100">
                                    {contacts.length === 0 ? (
                                        <div className="p-8 text-center text-slate-500">No messages yet</div>
                                    ) : (contacts.map((item: any) => (
                                        <div key={item._id} className="p-4 space-y-3 relative group">
                                            <button onClick={() => handleDelete(item._id, 'contact')} className="absolute top-4 right-4 text-red-500 hover:text-red-700 p-2"><FaTrash /></button>
                                            <div>
                                                <h3 className="font-semibold text-slate-900">{item.firstName} {item.lastName}</h3>
                                                <p className="text-xs text-slate-500 font-mono">{new Date(item.createdAt).toLocaleDateString()}</p>
                                            </div>
                                            <div className="text-sm space-y-2 text-slate-600">
                                                <p className="inline-block bg-slate-100 px-2 py-1 rounded text-xs">{item.courseInterest}</p>
                                                <p className="italic bg-slate-50 p-3 rounded text-slate-700">"{item.message}"</p>
                                            </div>
                                        </div>
                                    )))}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeView === 'consultations' && (
                        <div className="space-y-6">
                            <h1 className="text-2xl font-bold text-slate-900">Consultations</h1>
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                                <div className="hidden md:block overflow-x-auto">
                                    <table className="w-full text-left">
                                        <thead className="bg-slate-50 border-b border-slate-200">
                                            <tr>
                                                <th className="p-4 font-semibold text-slate-700">Date</th>
                                                <th className="p-4 font-semibold text-slate-700">Name</th>
                                                <th className="p-4 font-semibold text-slate-700">Phone</th>
                                                <th className="p-4 font-semibold text-slate-700">Email</th>
                                                <th className="p-4 font-semibold text-slate-700">Interest</th>
                                                <th className="p-4 font-semibold text-slate-700">Message</th>
                                                <th className="p-4 font-semibold text-slate-700">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {consultations.length === 0 ? (
                                                <tr><td colSpan={7} className="p-8 text-center text-slate-500">No consultations yet</td></tr>
                                            ) : (consultations.map((item: any) => (
                                                <tr key={item._id} className="hover:bg-slate-50">
                                                    <td className="p-4 text-slate-600 font-mono text-sm">{new Date(item.createdAt).toLocaleDateString()}</td>
                                                    <td className="p-4 font-medium text-slate-900">{item.name}</td>
                                                    <td className="p-4 text-slate-600">{item.phone}</td>
                                                    <td className="p-4 text-slate-600">{item.email}</td>
                                                    <td className="p-4 text-slate-800">{item.courseInterest}</td>
                                                    <td className="p-4 max-w-md text-slate-600">{item.message}</td>
                                                    <td className="p-4">
                                                        <button onClick={() => handleDelete(item._id, 'consultation')} className="text-red-500 hover:text-red-700 transition-colors p-2 hover:bg-red-50 rounded-lg"><FaTrash /></button>
                                                    </td>
                                                </tr>
                                            )))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="md:hidden divide-y divide-slate-100">
                                    {consultations.length === 0 ? (
                                        <div className="p-8 text-center text-slate-500">No consultations yet</div>
                                    ) : (consultations.map((item: any) => (
                                        <div key={item._id} className="p-4 space-y-3 relative group">
                                            <button onClick={() => handleDelete(item._id, 'consultation')} className="absolute top-4 right-4 text-red-500 hover:text-red-700 p-2"><FaTrash /></button>
                                            <div>
                                                <h3 className="font-semibold text-slate-900">{item.name}</h3>
                                                <p className="text-xs text-slate-500 font-mono">{new Date(item.createdAt).toLocaleDateString()}</p>
                                            </div>
                                            <div className="text-sm space-y-2 text-slate-600">
                                                <p>{item.phone}</p>
                                                <p className="inline-block bg-slate-100 px-2 py-1 rounded text-xs">{item.courseInterest}</p>
                                                {item.message && <p className="italic bg-slate-50 p-3 rounded text-slate-700">"{item.message}"</p>}
                                            </div>
                                        </div>
                                    )))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
