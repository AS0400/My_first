export type CampusService = {
  id: string;
  title: string;
  description: string;
  details: string;
  icon: string; // emoji or short label
};

export const services: CampusService[] = [
  {
    id: 'library',
    title: 'Library',
    description: 'Books, study spaces, and digital resources',
    details:
      'The University Library offers quiet study zones, group rooms, printing, and access to thousands of journals and e-books. Open 8am–10pm on weekdays.',
    icon: '📚',
  },
  {
    id: 'cafeteria',
    title: 'Cafeteria',
    description: 'Meals, snacks, and coffee across campus',
    details:
      'The main cafeteria serves hot meals, vegan options, and fresh coffee. Meal plans are accepted. Hours: 7am–7pm.',
    icon: '☕️',
  },
  {
    id: 'it-helpdesk',
    title: 'IT Helpdesk',
    description: 'Tech support for wifi, accounts, and devices',
    details:
      'Get help with password resets, Wi‑Fi connectivity, and software access. Visit Building C, Room 101 or submit a ticket online.',
    icon: '💻',
  },
  {
    id: 'sports-center',
    title: 'Sports Center',
    description: 'Gym, classes, and intramural sports',
    details:
      'The Sports Center includes a full gym, swimming pool, and courts. Join fitness classes or sign up for intramurals.',
    icon: '🏀',
  },
  {
    id: 'student-affairs',
    title: 'Student Affairs',
    description: 'Advising, counseling, and student life',
    details:
      'Student Affairs supports wellbeing, academic success, and clubs. Counseling services are available by appointment.',
    icon: '🎓',
  },
];

export function getServiceById(serviceId: string): CampusService | undefined {
  return services.find((s) => s.id === serviceId);
}

