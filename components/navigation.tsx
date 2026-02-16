interface NavigationProps {
  selectedTopic: string
  setSelectedTopic: (topic: string) => void
}

export default function Navigation({ selectedTopic, setSelectedTopic }: NavigationProps) {
  const topics = [
    { id: 'overview', label: 'Overview' },
    { id: 'history', label: 'History' },
    { id: 'types', label: 'Insulin Types' },
    { id: 'mechanism', label: 'Mechanism' },
    { id: 'clinical', label: 'Clinical Use' },
    { id: 'future', label: 'Future' },
  ]

  return (
    <nav className="bg-primary/5 border-b border-border sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto py-4">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setSelectedTopic(topic.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm whitespace-nowrap ${
                selectedTopic === topic.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-secondary'
              }`}
            >
              {topic.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
