import {Container,Row, Col} from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

function LinksExample() {
  return (

<Container className="wbg-black p-3 mt-4" fluid>
<Row>
<Col sm={3}>
<h2 className="text-white fs-5">Products</h2>
<hr className="border"/>
<ul className="text-white list-inline">
<li><Link href="/enterprise-product-management">Enterprise Product Management</Link></li>    
<li><Link href="/dynamic-offer-management">Dynamic Offer Management</Link></li>    
<li><Link href="/deal-management">Deal Management</Link></li>    
<li><Link href="/relationship-based-pricing-managemen">Relationship-Based Pricing Management</Link></li>    
<li><Link href="/enterprise-billing-and-statements-management">Enterprise Billing and Statements Management</Link></li>    
<li><Link href="/ecosystem-management-and-monetization">Ecosystem Management and Monetisation</Link></li>    
<li><Link href="/benefits-and-loyalty-management">Benefits and Loyalty Management</Link></li>
<li><Link href="/enterprise-indirect-taxation-management">Enterprise Indirect Taxation Management</Link></li>    

</ul>
</Col>
<Col sm={2}>
<h2 className="text-white fs-5">Industries</h2>
<hr className="border"/>
<ul className="text-white list-inline">
<li><Link href="/financial-services">Financial Services</Link></li>
<li><Link href="/telecom">Telecom</Link></li>
<li><Link href="/travel">Travel</Link></li>
<li><Link href="/suntec-industries-insurance">Insurance</Link></li>
</ul>
</Col>
<Col sm={3}>
<h2 className="text-white fs-5">Solutions</h2>
<hr className="border"/>
<ul className="text-white list-inline">
<li>Personalization</li>
<li>Banking-as-a-Service</li>
<li>Product Rationalization</li>
<li>VAT for GCC</li>
<li>Negative Interest Management</li>
<li>Invoicing Solution for Swedish Banks</li>
<li>e-Invoicing Solution for KSA</li>
<li>Credit Card Solution</li>
<li>Account Analysis Solution</li>
</ul>
</Col>
<Col sm={2}>
<h2 className="text-white fs-5">Insights</h2>
<hr className="border"/>
<ul className="text-white list-inline">
<li>Articles</li>
<li>Blogs</li>
<li>Case Studies</li>
<li>Datasheets</li>
<li>eBook</li>
<li>Podcasts</li>
<li>Point of View</li>
<li>Reports</li>
<li>Videos</li>
<li>Whitepapers</li>
<li>Webinars</li>
</ul>
</Col>
<Col sm={2}>
<h2 className="text-white fs-5">About</h2>
<hr className="border"/>
<ul className="text-white list-inline">
<li>Company</li>
<li>Contact Us</li>
<li>Events</li>
<li>Careers</li>
<li>Covid Response</li>
<li>CSR</li>
<li>HR Initiative</li>
<li>Newsroom</li>
<li>Partners</li>
<li>Notices</li>
<li>Sitemap</li>
<li>Privacy Policy</li>

</ul>
</Col>
</Row>
<Container>
<p className="text-white">All Rights Reserved. © 2023 SunTec Business Solutions.</p>
<p className="text-white">SunTec® and Xelerate® are registered trademarks of SunTec Business Solutions.</p>
</Container>
</Container>

  );
}

export default LinksExample;