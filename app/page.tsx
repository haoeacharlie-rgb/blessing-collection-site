import { CollectionExperience } from "@/components/CollectionExperience";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-md items-center justify-center">
        <CollectionExperience />
      </div>
    </main>
  );
}

