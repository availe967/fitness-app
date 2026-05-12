export default function TabBar({ tabs, activeTab, onTabChange }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur border-t border-surface-light safe-area-bottom">
      <div className="max-w-lg mx-auto flex justify-around py-2">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-lg transition-all duration-200 min-w-[56px] ${
                isActive
                  ? 'text-primary-light scale-105'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="text-[10px] font-medium">{tab.label}</span>
              {isActive && (
                <div className="w-1 h-1 rounded-full bg-primary-light mt-0.5" />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
