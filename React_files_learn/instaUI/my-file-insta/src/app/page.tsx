export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Existing content might be here, I will add the new section below it */}

      {/* Section: Where everyday moments bring friends together */}
      <section className="flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-4xl font-bold mb-8">
          Where everyday moments bring friends together
        </h1>
        {/* Placeholder for the image - replace src with the actual image URL */}
        <img 
          src="/placeholder-image.jpg" 
          alt="Instagram office or moment" 
          className="w-full max-w-2xl h-auto"
        />
      </section>

      {/* ... existing code ...*/}
    </main>
  );
} 