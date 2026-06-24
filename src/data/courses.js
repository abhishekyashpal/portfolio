export const coursePricing = [
  { title: 'Data Science', price: 75000, discountPercent: 30 },
  { title: 'AI/ML Engineer', price: 55000, discountPercent: 30 },
  { title: 'Generative AI/Agentic AI Engineer', price: 55000, discountPercent: 30 },
  { title: 'Python + MLOps', price: 35000, discountPercent: 20 },
  { title: 'Advance Python', price: 30000, discountPercent: 20 },
  { title: 'Backend Developer (Python, NodeJS, Go)', price: 20000, discountPercent: 20 },
  { title: 'UI Developer (Angular, React, Vue)', price: 18000, discountPercent: 20 },
  { title: 'Fullstack Developer (Backend + UI + DB)', price: 25000, discountPercent: 20 },
  { title: 'Database (SQL, NoSQL)', price: 17500, discountPercent: 20 },
  { title: 'System Design', price: 55000, discountPercent: 30 },
  { title: 'DSA Course', price: 55000, discountPercent: 30 },
  { title: 'Cloud Engineer', price: 55000, discountPercent: 20 },
  { title: 'DevOps', price: 55000, discountPercent: 30 },
].map((course) => ({
  ...course,
  slug: course.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, ''),
}));

export const formatPrice = (price) => `Rs. ${price.toLocaleString('en-IN')}`;

export const getDiscountedPrice = (course) =>
  course.discountPercent ? course.price * (1 - course.discountPercent / 100) : course.price;

export const getCourseBySlug = (slug) => coursePricing.find((course) => course.slug === slug);

