import type { ComponentInfo } from '../types';

interface ComponentCardProps {
  info: ComponentInfo;
}

function ComponentCard({ info }: ComponentCardProps) {
  const DemoComponent = info.component;

  return (
    <div className="component-card">
      <div className="card-header">
        <h3>{info.name}</h3>
        <span className="category-badge">{info.category}</span>
      </div>

      <p className="card-description">{info.description}</p>

      <div className="card-demo">
        <DemoComponent />
      </div>
    </div>
  );
}

export default ComponentCard;