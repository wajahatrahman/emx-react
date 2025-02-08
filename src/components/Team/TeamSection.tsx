import React from 'react';
import content from '../../data/content.json';
import { teamMembers } from '../../data/team';
import type { TeamMember } from '../../types';

export const TeamSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 animated-background">
      <h2 className="text-4xl font-bold text-center mb-16 relative z-10">{content.team.title}</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 relative z-10">
        {teamMembers.map((member: TeamMember, index: number) => (
          <div
            key={index}
            className="group glass-card rounded-xl p-4 transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="aspect-square overflow-hidden rounded-lg mb-4">
              <img
                src={`${member.image}?auto=format&fit=crop&w=300&h=300`}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};