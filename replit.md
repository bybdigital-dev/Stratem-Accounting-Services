# Stratem Accounting Services Website

## Project Overview
A modern, professional website for Stratem Accounting Services, a Namibian accounting and tax services business. The site showcases their services, process, and provides a contact form for client inquiries.

**Current State:** Fully functional MVP with responsive design and working contact form

## Pages
1. **Home** (`/`) - Hero section with company introduction and value propositions
2. **About Us** (`/about`) - Company story and why choose Stratem
3. **Services** (`/services`) - Four main service offerings with detailed descriptions
4. **Our Process** (`/process`) - 4-step process visualization
5. **Gallery** (`/gallery`) - Professional images showcasing office and services
6. **Contact** (`/contact`) - Fully functional contact form with validation

## Tech Stack

### Frontend
- React with TypeScript
- Wouter for routing
- Tailwind CSS for styling
- Shadcn UI components
- TanStack Query for data fetching
- Lucide React for icons

### Backend
- Express.js server
- In-memory storage (MemStorage)
- Zod for validation
- RESTful API endpoints

## Design System

### Colors
- **Primary:** Navy blue (215 75% 32%) - used for headers, CTAs, and branding
- **Background:** Light grey/white for clean, professional look
- **Typography:** Inter/DM Sans font family for modern, professional appearance

### Key Features
- Sticky navigation with mobile menu
- Responsive design (mobile, tablet, desktop)
- Professional imagery with hero sections
- Hover effects and smooth transitions
- Toast notifications for user feedback

## API Endpoints

### Contact Form
- **POST /api/contact** - Submit contact form
  - Required: name, email, service, message
  - Optional: phone, company
  - Returns: Success response with submission data

- **GET /api/contact** - Retrieve all submissions
  - Returns: Array of submissions sorted by date

## Project Structure

```
client/
  src/
    components/      # Reusable UI components
      Navigation.tsx
      Footer.tsx
      ServiceCard.tsx
      ProcessStep.tsx
      ContactForm.tsx
      ui/           # Shadcn UI components
    pages/          # Page components
      Home.tsx
      AboutUs.tsx
      Services.tsx
      OurProcess.tsx
      Gallery.tsx
      Contact.tsx
    lib/            # Utilities and clients
server/
  routes.ts         # API route definitions
  storage.ts        # In-memory storage implementation
shared/
  schema.ts         # Type definitions and schemas
```

## Services Offered

1. **Bookkeeping**
   - Transaction capturing
   - Bank/account reconciliation
   - Month-end reporting

2. **Employee Taxation (ETX)**
   - Monthly ETX file preparation and submission
   - ETX file corrections
   - Tax sessions for employees
   - Employee taxpayer registration

3. **Payroll**
   - Monthly payroll processing
   - Salary structuring
   - Namibian regulation compliance

4. **Pension Assistance**
   - Unclaimed pension collection assistance
   - Document guidance for employees

## Key Messages
- Quick response times (within 1 business day)
- Local Namibian expertise
- NamRA compliance focus
- Transparent reporting
- Professional service

## Development

The site runs on port 5000 with both frontend and backend on the same server. The workflow "Start application" runs `npm run dev` which starts the Express server with Vite integration.

## Recent Changes
- Initial project setup with all pages and navigation
- Implemented contact form with full validation
- Added professional imagery throughout
- Created responsive layouts for all pages
- Set up in-memory storage for contact submissions
- Tested end-to-end contact form functionality

## Future Enhancements
- Email notification system for new contact submissions
- Database persistence (PostgreSQL)
- Admin dashboard to view submissions
- Service request tracking
- Client testimonials section
- Blog/resources for Namibian tax updates
