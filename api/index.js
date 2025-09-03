export default function handler(req, res) {
  res.status(200).json({ 
    message: "Strapi cannot run on Vercel serverless functions. Please use a platform with persistent servers." 
  });
}
