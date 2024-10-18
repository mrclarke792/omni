import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../App";
import About from "../pages/about";
import Blog from "../pages/blog";
import BlogDetails from "../pages/blog-details";
import BlogDetails2 from "../pages/blog-details2"; // Keep the first import for the new blog details page
import BlogSeo from "../pages/blog-seo"; // Corrected import for the new blog SEO page
import DataAnalytics from "../pages/data-analytics";
import AICustomerEngagement from "../pages/ai-customer-engagement"; 
import DigitalMarketingStrategies from "../pages/digital-marketing-strategies";
import OnlinePresence from "../pages/online-presence";
import GDPRCompliance from "../pages/gdpr-compliance";
import LayoutTwo from "../layout/layoutTwo";
import HomeTwo from "../pages/home-2";
import Contact from "../pages/contact";
import Faq from "../pages/faq";
import Testimonials from "../pages/testimonials";
import HomeThree from "../pages/home-3";
import ServiceDetails from "../pages/service-details";
import Services from "../pages/services";
import TermsConditions from "../pages/terms-conditions";
import PrivacyPolicy from "../pages/privacy-policy";
import SearchResult from "../pages/search-result";
import Register from "../pages/register";
import Team from "../pages/team";
import Pricing from "../pages/pricing";
import Login from "../pages/login";
import NotFound from "../pages/404";
import Author from "../pages/author";
import Categories from "../pages/categories";
import WebDevelopment from "../pages/web-development"; // Import the new component
import SEOServices from "../pages/seo-services";
import PaidAdvertising from "../pages/Paid-Advertising";
import AppDevelopment from "../pages/App-Development";
import BusinessAutomation from "../pages/Business-Automation";
import ImportanceOfUX from "../pages/Importance-of-ux";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
        ],
    },
    {
        path: "/",
        element: <LayoutTwo />,
        children: [
            {
                path: "/home-2",
                element: <HomeTwo />
            },
            {
                path: "/home-3",
                element: <HomeThree />
            },
            {
                path: "/service-details",
                element: <ServiceDetails />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/web-development", // Updated to include the leading slash
                element: <WebDevelopment />
            },
            {
                path: "/seo-services", // Updated to include the leading slash
                element: <SEOServices />
            },
            {
                path: "/Paid-Advertising", // Correct with leading slash
                element: <PaidAdvertising />
            },
            {
                path: "/App-Development", // Correct with leading slash
                element: <AppDevelopment />
            },
            {
                path: "/Business-Automation", // Correct with leading slash
                element: <BusinessAutomation />
            },
         {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/blog-details",
                element: <BlogDetails />
            },
            {
                path: "/blog-details2", // Keep the new blog details route
                element: <BlogDetails2 />
            },
            {
                path: "/blog-seo", // Corrected to use the BlogSeo component
                element: <BlogSeo />
            },
            {
                path: "/data-analytics", // New blog route for Data Analytics
                element: <DataAnalytics />
            },
            {
                path: "/ai-customer-engagement", // New blog route for AI customer engagement
                element: < AICustomerEngagement />
            },
            {
                path: "/digital-marketing-strategies", // New blog route for Digital Marketing Strategies
                element: <DigitalMarketingStrategies />
            },
            {
                path: "/online-presence", // New blog route for Online Presence
                element: <OnlinePresence />
            },
            {
                path: "/gdpr-compliance", // New blog route for GDPR Compliance
                element: <GDPRCompliance />
            },
            {
                path: "/Importance-of-ux", // New blog route for "The Importance of UX Design"
                element: <ImportanceOfUX />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/testimonials",
                element: <Testimonials />
            },
            {
                path: "/team",
                element: <Team />
            },
            {
                path: "/pricing",
                element: <Pricing />
            },
            {
                path: "/terms-conditions",
                element: <TermsConditions />
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "/search-result",
                element: <SearchResult />   
            },
            {
                path: "/register",
                element: <Register />   
            },
            {
                path: "/login",
                element: <Login />   
            },
            {
                path: "/author",
                element: <Author />   
            },
            {
                path: "/categories",
                element: <Categories />   
            },
        ]
    }
])