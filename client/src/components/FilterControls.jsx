import { useState } from 'react';

const FilterControls = ({ filters, onFilterChange, onClearFilters }) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const filterOptions = {
    language: [
      { value: 'en', label: 'English' },
      { value: 'hi', label: 'Hindi' },
      { value: 'es', label: 'Spanish' },
      { value: 'fr', label: 'French' },
      { value: 'de', label: 'German' },
      { value: 'it', label: 'Italian' },
      { value: 'pt', label: 'Portuguese' },
      { value: 'ru', label: 'Russian' },
      { value: 'ja', label: 'Japanese' },
      { value: 'ko', label: 'Korean' },
      { value: 'zh', label: 'Chinese' },
      { value: 'ar', label: 'Arabic' }
    ],
    country: [
      { value: 'in', label: 'India' },
      { value: 'us', label: 'United States' },
      { value: 'gb', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
      { value: 'au', label: 'Australia' },
      { value: 'de', label: 'Germany' },
      { value: 'fr', label: 'France' },
      { value: 'jp', label: 'Japan' },
      { value: 'cn', label: 'China' },
      { value: 'br', label: 'Brazil' }
    ],
    timeframe: [
      { value: '24h', label: 'Last 24 hours' },
      { value: '7d', label: 'Last 7 days' },
      { value: '30d', label: 'Last 30 days' }
    ],
    sentiment: [
      { value: 'positive', label: 'Positive' },
      { value: 'neutral', label: 'Neutral' },
      { value: 'negative', label: 'Negative' }
    ]
  };

  const handleFilterChange = (filterType, value) => {
    onFilterChange(filterType, value);
  };

  const activeFiltersCount = Object.values(filters).filter(value => value && value !== '').length;

  return (
    <div className="filter-controls">
      <div className="filter-container">
        <div className="filter-left">
          <div className="dropdown-container">
            <button 
              className="dropdown-btn"
              onClick={() => setShowAllCategories(!showAllCategories)}
            >
              All categories
              <svg className={`dropdown-arrow ${showAllCategories ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="dropdown-container">
            <button 
              className="dropdown-btn filter-btn"
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            >
              Filter {activeFiltersCount > 0 && <span className="filter-count">{activeFiltersCount}</span>}
              <svg className={`dropdown-arrow ${showFilterDropdown ? 'rotated' : ''}`} width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {showFilterDropdown && (
              <div className="filter-dropdown">
                <div className="filter-section">
                  <label className="filter-label">Language</label>
                  <select 
                    value={filters.language || ''} 
                    onChange={(e) => handleFilterChange('language', e.target.value)}
                    className="filter-select"
                  >
                    <option value="">All languages</option>
                    {filterOptions.language.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div className="filter-section">
                  <label className="filter-label">Country</label>
                  <select 
                    value={filters.country || ''} 
                    onChange={(e) => handleFilterChange('country', e.target.value)}
                    className="filter-select"
                  >
                    <option value="">All countries</option>
                    {filterOptions.country.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div className="filter-section">
                  <label className="filter-label">Time</label>
                  <select 
                    value={filters.timeframe || ''} 
                    onChange={(e) => handleFilterChange('timeframe', e.target.value)}
                    className="filter-select"
                  >
                    <option value="">All time</option>
                    {filterOptions.timeframe.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                <div className="filter-section">
                  <label className="filter-label">Sentiment</label>
                  <select 
                    value={filters.sentiment || ''} 
                    onChange={(e) => handleFilterChange('sentiment', e.target.value)}
                    className="filter-select"
                  >
                    <option value="">All sentiments</option>
                    {filterOptions.sentiment.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>

                {activeFiltersCount > 0 && (
                  <button className="clear-filters-btn" onClick={onClearFilters}>
                    Clear all filters
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;