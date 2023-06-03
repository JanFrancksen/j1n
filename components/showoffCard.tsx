import React from 'react';

interface ShowoffCardProps {
  number: string;
  title: string;
  content: string;
}

const ShowoffCard: React.FC<ShowoffCardProps> = ({
  number,
  title,
  content,
}) => {
  return (
    <div className="flex gap-x-8 border p-8 sticky top-24 bg-white rounded">
      <div className="text-3xl">{number}</div>
      <div>
        <h5 className="text-3xl mb-4">{title}</h5>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default ShowoffCard;
