import { redirect } from 'next/navigation';

export default function Home() {
  // Redirect to dashboard
  redirect('/Dashboard');
}

export const metadata = {
  title: 'Portfolio - Pratik Shinde',
  description: 'Full Stack Developer Portfolio showcasing projects and experience',
};