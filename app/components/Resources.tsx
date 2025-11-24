import React, { useState, useEffect } from 'react';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  link?: string;
  tags: string[];
}

export default function StoryMapResources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const resources: Resource[] = [
    {
      id: '1',
      title: 'A short Biography of Bangalore',
      description: 'George, T.J.S. (2016). Askew: A short Biography of Bangalore. Aleph Book Company, Delhi.',
      category: 'research',
      type: 'Research',
      link: 'https://www.amazon.in/Askew-Biography-Bangalore-T-George/dp/9384067210',
      tags: ['banglore', 'lakes', 'history']
    },
    {
      id: '2',
      title: 'Vanishing Lakes: A Study of Bangalore City',
      description: 'Thippaiah, P. (2009). Vanishing Lakes: A Study of Bangalore City. Institute for Social and Economic Change, Bangalore.',
      category: 'research',
      type: 'Research',
      link: 'https://www.amazon.in/Vanishing-lakes-study-Bangalore-city/dp/8177911163',
      tags: ['banglore', 'lakes', 'history']
    },
    {
      id: '3',
      title: 'India in Triangle',
      description: 'Rao, Shruthi and Iyer, Meera (2025). India in Triangle: The incredible story of how India was mapped and the Himalayas measured. Penguin, Delhi.',
      category: 'research',
      type: 'Research',
      link: 'https://www.amazon.in/India-Triangles-Incredible-Himalayas-Trigonometrical/dp/0143468383',
      tags: ['banglore', 'lakes', 'history']
    },
    {
      id: '4',
      title: 'Story of a Neighbourhood Lake that is Transforming',
      description: 'Public domain map dataset with physical and cultural geographic data at multiple scales.',
      category: 'socialmedia',
      type: 'Facebook ',
      link: 'https://www.facebook.com/watch/?v=801403965087767',
      tags: ['social media', 'facebook', 'video']
    },
    {
      id: '5',
      title: 'Beloved neighbourhood lake',
      description: 'Sridharan, Bhanu. 24 March 2023. Beloved neighbourhood lake designated as a CA site, leased to a private trust.',
      category: 'articles',
      type: 'citizenmatters',
      link: 'https://citizenmatters.in/venkateshpura-lake-ca-site-leased-to-private-trust-by-bda/',
      tags: ['article', 'news', 'press-coverage']
    },
    {
      id: '6',
      title: 'Bengaluru: Encroachers target',
      description: 'Thakur, Aksheev. 27 December 2017. Bengaluru: Encroachers target Venkateshpura Lake.',
      category: 'articles',
      type: 'deccanchronicle',
      link: 'https://www.deccanchronicle.com/nation/current-affairs/271217/bengaluru-encroachers-target-venkateshpura-lake.html',
      tags: ['narrative', 'guide', 'history']
    },
    {
      id: '7',
      title: 'BDA 2016 ',
      description: 'Lake survey report 2016.',
      category: 'documentation',
      type: 'Report',
      link: 'https://drive.google.com/file/d/1fhQ2yY1xYgpebZ6QX6YCUBxmLaZoVie_/view',
      tags: ['survey', 'report', 'standard']
    },
    {
      id: '8',
      title: 'Visit along with survey officers',
      description: 'Minister Krishna Byre Gowda visits Venkateshpura Lake along with survey officers from BDA in 2023.',
      category: 'socialmedia',
      type: 'Twitter',
      link: 'https://twitter.com/KrishnaByreGowd/status/1658816283776016384',
      tags: ['Socialmedia', 'post', 'twitter']
    },
    {
      id: '9',
      title: 'Thanks to volunteers',
      description: 'Young volunteers joined a clean-up and plantation drive, spending time greening the lake.',
      category: 'socialmedia',
      type: 'Twitter',
      link: 'https://x.com/krishnabgowda/status/1805579759705112974?lang=en',
      tags: ['Socialmedia', 'post', 'twitter']
    },
    {
      id: '10',
      title: 'Creatures on Canvas',
      description: 'Mural artists painted the wildlife and biodiversity around the lake.',
      category: 'socialmedia',
      type: 'Linkedin',
      link: 'https://www.linkedin.com/posts/atreeblr_as-part-of-our-lake-restoration-project-at-ugcPost-7206503693062426625-xJpL/',
      tags: ['Socialmedia', 'post', 'Linkedin']
    },
    {
      id: '11',
      title: 'When citizens take ownership',
      description: 'Urban ecological commons are crucial for ecosystem services and for public health.',
      category: 'articles',
      type: 'Mongabay',
      link: 'https://india.mongabay.com/2023/09/when-citizens-take-ownership-of-urban-commons/',
      tags: ['Popular article', 'Mongabay', 'Lake']
    },
    {
      id: '12',
      title: 'Bengaluru: Encroachers target',
      description: 'Over sixty lakes in the city are not under the custody of BBMP or BDA, allowing exploitation.',
      category: 'articles',
      type: 'Deccan Chronicle',
      link: 'https://www.deccanchronicle.com/nation/current-affairs/271217/bengaluru-encroachers-target-venkateshpura-lake.html',
      tags: ['Popular article', 'deccanchronicle', 'Lake']
    },
    {
      id: '13',
      title: 'Lake glow up: From neglect to flourish',
      description: 'Venkateshpura Lake is witnessing a remarkable transformation.',
      category: 'articles',
      type: 'Bangalore Mirror',
      link: 'https://bangaloremirror.indiatimes.com/bangalore/civic/lake-glow-up-from-neglect-to-flourish/articleshow/111239359.cms',
      tags: ['Popular article', 'bangalore mirror', 'transformation']
    },
    {
      id: '14',
      title: 'Wetland Field Guide',
      description: 'A booklet for kids',
      category: 'fieldguide',
      type: 'PDF',
      link: 'https://drive.google.com/file/d/1gEIwSm-eO56r8aWUQsphZrbsxG9_PqHC/view?usp=drive_link',
      tags: ['Field guide', 'Student materials', 'Education']
    },
  ];

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'fieldguide', name: 'Field Guides' },
    { id: 'research', name: 'Research' },
    { id: 'articles', name: 'Articles' },
    { id: 'socialmedia', name: 'Social Media' },
    { id: 'documentation', name: 'Documents' }
  ];

  // Filtering logic
  const filteredResources = resources.filter(resource => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' || resource.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentResources = filteredResources.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredResources.length / itemsPerPage);

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 ">

      <div className="w-4/5 mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Search */}
        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search resources, tags, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#087f9b] focus:border-transparent text-sm"
          />

          {/* Category filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-centre gap-2 px-4 py-2 rounded-full transition-all text-sm ${
                  selectedCategory === cat.id
                    ? 'bg-[#087f9b] text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-300'
                }`}
              >
                <span className="font-medium">{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <div className="mb-4 text-slate-600">
          <span className="font-medium">{filteredResources.length}</span>{' '}
          resource{filteredResources.length !== 1 ? 's' : ''} found
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentResources.map(resource => (
            <div
              key={resource.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-slate-200 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">
                      {resource.title}
                    </h3>
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                      {resource.type}
                    </span>
                  </div>

                  {resource.link && (
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colours"
                    >
                      <img
                        src="/new-tab.png"
                        className="opacity-50 w-5 h-5 hover:opacity-100"
                        alt="External Link"
                      />
                    </a>
                  )}
                </div>

                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-slate-100 text-slate-700 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredResources.length === 0 && (
          <div className="text-centre py-12">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No resources found</h3>
            <p className="text-slate-600">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-centre items-centre gap-2 mt-10">

            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="px-4 py-2 rounded-lg border bg-white hover:bg-slate-100 disabled:opacity-50"
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-3 py-2 rounded-lg border ${
                  currentPage === index + 1
                    ? 'bg-[#087f9b] text-white'
                    : 'bg-white hover:bg-slate-100'
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              className="px-4 py-2 rounded-lg border bg-white hover:bg-slate-100 disabled:opacity-50"
              disabled={currentPage === totalPages}
            >
              Next
            </button>

          </div>
        )}
      </div>
    </div>
  );
}
