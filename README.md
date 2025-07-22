Matrimony App Frontend
Overview
The Matrimony App is a fully responsive, feature-rich frontend web application designed to facilitate matchmaking by allowing users to register, search profiles, view detailed profiles, manage their dashboard, and communicate via a messaging interface. This project is a frontend-only implementation, using mock data and interactions without a backend, as per the requirements. It provides a seamless user experience across desktop and mobile devices, with interactive features like form validations, multi-step forms, and tabbed navigation.
Features
The application includes the following major modules, all implemented with HTML, CSS, and JavaScript:

Landing Page (Home)

Hero Section: A visually appealing banner with a background image and call-to-action (CTA) buttons ("Register Now" and "Search Profiles").
Navigation Bar: Responsive navigation with links to Home, Search, Login/Register, About Us, and Contact, including a mobile-friendly hamburger menu.
Featured Profiles: Displays 4 profiles with diverse names (e.g., Aryan Sharma, Ayesha Khan, Priya Menon, Thomas Varghese), each showing an image, name, age, religion, location, and a "Send Interest" button.
Testimonials: A section showcasing user testimonials for social proof.
Footer: Includes quick links and contact information.


User Registration Page

Multi-step form with three steps:
Step 1: Personal Info (Name, DOB, Gender)
Step 2: Lifestyle & Preferences (Height, Religion, Education)
Step 3: Login Details (Email, Password, Confirm Password)


Input validations using regex (e.g., name length ≥ 2, valid email format, password ≥ 8 characters, matching confirm password).
Progress bar to indicate form completion stage.
Show/hide password toggle for user convenience.


Login Page

Simple form with Email and Password fields.
Input validations for email format and minimum password length (≥ 8 characters).
Show/hide password toggle and a "Forgot Password" link (UI only, no backend functionality).


Search Profiles Page

Filters Panel: Left sidebar with filters for Age Range, Religion, Caste, Education, Location, and Marital Status (mock functionality with alert on apply).
Profile Cards: Displays 10 profiles with diverse names (e.g., Imran Siddiqui, Neha Gupta, Maria Joseph, Vikram Singh, Fatima Sheikh), each including:
Image, Name, Age, Religion, Location
"Send Interest" button (triggers mock alert)
"View Full Profile" link (redirects to Profile Details page)




Profile Details Page

Detailed view of a sample profile (e.g., Aryan Sharma) with a large image and key details.
Tabbed sections for:
About
Education & Career
Family Details
Contact Preferences


Tabs are interactive, switching content dynamically using JavaScript.


My Dashboard (Post-Login Mock UI)

Displays mock user data (e.g., name: John Doe, interests sent: 5, interests received: 3).
Sidebar navigation with links to Dashboard, My Profile, Edit Profile, and Logout (mock links).
Responsive layout with a clean, card-based design.


Messaging UI (No Backend)

Left panel lists matches (e.g., Ayesha Khan, Priya Menon, Rohan Patel) with clickable items to switch chats.
Right panel shows a chat window with pre-filled mock messages for each match.
"Send Message" input with validation (prevents empty messages) and mock message appending functionality.



Technologies Used

HTML5: For structuring the web pages and content.
CSS3: For styling, with Tailwind CSS (via CDN) for responsive design and custom styles in styles.css for specific elements (e.g., hero background, chat messages).
JavaScript: For interactivity, including form validations, multi-step form navigation, tab switching, and mock messaging functionality.
Tailwind CSS: A utility-first CSS framework for rapid, responsive UI development.

Setup Instructions

Clone or Download the Repository:
Clone the project repository or download the files (index.html, styles.css, script.js) to a local directory.


File Structure:
Ensure all three files are in the same directory:/matrimony-app
├── index.html
├── styles.css
├── script.js




Dependencies:
The project uses Tailwind CSS via CDN (https://cdn.tailwindcss.com), so no local installation is required.
No additional dependencies or build tools are needed.


Run the Application:
Open index.html in a modern web browser (e.g., Chrome, Firefox, Edge).
Alternatively, use a local development server (e.g., via VS Code's Live Server extension or python -m http.server) for a better testing experience.



Usage

Landing Page: Navigate using the top navigation bar or mobile hamburger menu. Click "Register Now" to access the registration form or "Search Profiles" to view profiles.
Registration: Complete the multi-step form, ensuring all fields pass validation (error messages display for invalid inputs). Submit triggers a mock alert.
Login: Enter a valid email and password (≥ 8 characters) to simulate login (mock alert on success).
Search Profiles: Use the filter panel (mock functionality) or interact with profile cards. Clicking "Send Interest" triggers a mock alert, and "View Full Profile" navigates to the Profile Details page.
Profile Details: Switch between tabs to view different sections of the sample profile.
Dashboard: View mock user data and navigate via the sidebar (links are placeholders).
Messaging: Select a match from the left panel to view pre-filled messages. Type and send a new message (non-empty) to append it to the chat window.

Notes

No Backend: All interactions (e.g., form submissions, sending interests, messaging) are mocked using JavaScript alerts or local data manipulation, as no backend is implemented.
Profile Diversity: Profiles use a mix of Hindu, Muslim, and Christian names (e.g., Aryan Sharma, Ayesha Khan, Priya Menon, Imran Siddiqui, Maria Joseph) to reflect diversity.
Responsiveness: The app is fully responsive, tested for desktop, tablet, and mobile views.
Future Enhancements: Potential additions include backend integration for real data storage, advanced search filtering, and real-time messaging.

License
This project is for demonstration purposes and not licensed for commercial use. All images used are sourced from Unsplash under their free license.
Contact
For questions or feedback, contact Srivarshith at [vsrivarshith@gmail.com].
