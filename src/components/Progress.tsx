import React from 'react';

// DRIFT: Progress components with random colors and sizes

export const ProgressBar = ({ value, max = 100 }: { value: number; max?: number }) => (
  <div style={{
    width: '100%',
    height: '9px',
    backgroundColor: '#e5e7eb',
    borderRadius: '9999px',
    overflow: 'hidden'
  }}>
    <div style={{
      width: `${(value / max) * 100}%`,
      height: '100%',
      backgroundColor: '#3b82f6',
      borderRadius: '9999px',
      transition: 'width 0.3s ease'
    }} />
  </div>
);

export const CircularProgress = ({ value, size = 80 }: { value: number; size?: number }) => {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#10b981"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
};

export const StepProgress = ({ steps, current }: { steps: string[]; current: number }) => (
  <div className="flex items-center">
    {steps.map((step, i) => (
      <React.Fragment key={i}>
        <div className="flex flex-col items-center">
          <div className={`w-[32px] h-[32px] rounded-full flex items-center justify-center text-[13px] font-medium ${
            i <= current ? 'bg-[#8b5cf6] text-white' : 'bg-[#e5e7eb] text-[#6b7280]'
          }`}>
            {i + 1}
          </div>
          <span className="mt-[7px] text-[11px] text-[#6b7280]">{step}</span>
        </div>
        {i < steps.length - 1 && (
          <div className={`flex-1 h-[3px] mx-[11px] ${
            i < current ? 'bg-[#8b5cf6]' : 'bg-[#e5e7eb]'
          }`} />
        )}
      </React.Fragment>
    ))}
  </div>
);

export const LoadingBar = () => (
  <div style={{
    width: '100%',
    height: '4px',
    backgroundColor: '#f3f4f6',
    overflow: 'hidden'
  }}>
    <div style={{
      width: '30%',
      height: '100%',
      backgroundColor: '#f59e0b',
      animation: 'loading 1.5s ease-in-out infinite',
    }} />
  </div>
);

export const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
  <div style={{ marginBottom: '15px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
      <span style={{ fontSize: '13px', color: '#374151' }}>{skill}</span>
      <span style={{ fontSize: '12px', color: '#6b7280' }}>{level}%</span>
    </div>
    <div style={{ width: '100%', height: '7px', backgroundColor: '#e5e7eb', borderRadius: '4px' }}>
      <div style={{
        width: `${level}%`,
        height: '100%',
        backgroundColor: '#6366f1',
        borderRadius: '4px'
      }} />
    </div>
  </div>
);
