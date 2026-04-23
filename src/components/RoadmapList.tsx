import RoadmapCard from './RoadmapCard';
import { roadmaps } from '../data/roadmaps';

export default function RoadmapList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {roadmaps.map((roadmap) => (
        <RoadmapCard key={roadmap.id} roadmap={roadmap} />
      ))}
    </div>
  );
}