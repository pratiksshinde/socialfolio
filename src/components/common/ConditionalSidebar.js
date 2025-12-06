'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { checkResume } from '@/services/userService';
import Sidebar from './Sidebar';

export default function ConditionalSidebar() {
    const pathname = usePathname();
    const [shouldShowSidebar, setShouldShowSidebar] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            // Check if token exists
            const token = Cookies.get('token');

            if (!token) {
                setShouldShowSidebar(false);
                return;
            }

            // Check if resume exists
            try {
                const response = await checkResume();
                // Only show sidebar if both token and resume exist
                setShouldShowSidebar(response.hasResume === true);
            } catch (error) {
                console.error('Error checking resume for sidebar:', error);
                setShouldShowSidebar(false);
            }
        };

        checkAuth();
    }, [pathname]); // Re-check when route changes

    // Only render sidebar if user is authenticated and has resume
    if (!shouldShowSidebar) {
        return null;
    }

    return <Sidebar />;
}
