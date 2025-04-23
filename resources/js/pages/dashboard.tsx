import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard() {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default to the current year

    // Generate a list of years from 2020 to the current year
    const years = [];
    for (let year = 2020; year <= new Date().getFullYear(); year++) {
        years.push(year);
    }

    return (
        <AppLayout>
            <Head title="Dashboard" />
        </AppLayout>
    );
}
