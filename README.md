

 Mandem Store Homepage 🛍️

A React component for the Mandem Store homepage, showcasing a stylish profile section, a search bar, a carousel of product images, and a "Best Selling Sneakers" feature section. This component serves as the main landing page for an e-commerce platform, designed to provide a welcoming and user-friendly shopping experience.

 Features

- Profile Section: Welcomes users with a personalized message and profile image.
- Search Bar: Allows users to search for products on the store, with an integrated search icon button from FontAwesome.
- Product Carousel: Displays rotating images of featured products (sneakers and apparel) using Bootstrap’s Carousel.
- Best Selling Sneakers Section: Highlights the best-selling products with a dedicated section and a "Visit Store" call-to-action button.
- Section Header: Uses a reusable `SectionHead` component to structure sections effectively.

 Technologies Used

- React: For UI components and state management.
- FontAwesome: For icons, specifically a magnifying glass icon in the search bar.
- Bootstrap: For responsive design, grid layout, and carousel functionality.
- CSS: For custom styles, including shadow, padding, and font size adjustments.

 Installation

1. Clone this repository:
   bash
   git clone https://github.com/your-username/mandem-store-homepage.git
   
2. Install dependencies:
   bash
   npm install
   
3. Run the application:
   bash
   npm start
   

 Code Overview

- Home Component:
  - Imports images for the profile and carousel items.
  - Implements a responsive grid layout using Bootstrap for sections like the profile, search bar, and product display.
  - Uses FontAwesome for the search icon, adding a modern look to the search button.
  - Includes the `SectionHead` component to add dynamic section headers across the app.

 Component Breakdown

- Profile Section: A row with a profile image and welcome text, customized for the "Mandem Store."
- Search Bar: A styled search bar with a FontAwesome magnifying glass icon inside a button for easy product searches.
- Product Carousel: Displays rotating images of products using Bootstrap’s carousel component with different images (`sneakers1`, `boy`, `lady`).
- Best Selling Sneakers: Highlights top products with a catchy heading, descriptive text, and a “Visit Store” button to drive user engagement.

 Example Code

javascript
<button className="tran2 width searchBtn" type="submit">
  <FontAwesomeIcon icon={faMagnifyingGlass} />
</button>


 Folder Structure

- `images/`: Contains images for the carousel and profile.
- `components/`: Includes the `Home.js` file for the homepage and `SectionHead.js` as a reusable section header component.


