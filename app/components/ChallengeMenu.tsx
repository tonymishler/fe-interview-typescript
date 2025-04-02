import Link from 'next/link';

interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

interface ChallengeCategory {
  id: string;
  title: string;
  description: string;
  challenges: Challenge[];
}

const categories: ChallengeCategory[] = [
  {
    id: 'typescript',
    title: 'TypeScript',
    description: 'Test your TypeScript skills with practical coding challenges',
    challenges: [
      {
        id: 'todo-list',
        title: 'Todo List',
        description: 'Build a todo list application with TypeScript',
        difficulty: 'Beginner'
      },
      {
        id: 'counter',
        title: 'Counter App',
        description: 'Build an interactive counter with customizable step size, limits, and history',
        difficulty: 'Beginner'
      }
    ]
  },
  {
    id: 'react',
    title: 'React',
    description: 'Showcase your React development abilities',
    challenges: []
  }
  // More categories can be added here
];

export default function ChallengeMenu() {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-12 text-white">Shift Paradigm Coding Challenges</h1>
        <div className="space-y-8">
          {categories.map(category => (
            <div key={category.id} className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
              <h2 className="text-2xl font-semibold mb-2 text-white">{category.title}</h2>
              <p className="text-gray-300 mb-6">{category.description}</p>
              <div className="grid gap-4">
                {category.challenges.map(challenge => (
                  <Link
                    key={challenge.id}
                    href={`/challenge/${category.id}/${challenge.id}`}
                    className="block p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors border border-gray-600"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-white">{challenge.title}</h3>
                        <p className="text-gray-300 mt-1">{challenge.description}</p>
                      </div>
                      <span className="px-3 py-1 text-sm rounded bg-blue-500 text-white font-medium">
                        {challenge.difficulty}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
              {category.challenges.length === 0 && (
                <p className="text-gray-400 text-center py-4">Challenges coming soon...</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 