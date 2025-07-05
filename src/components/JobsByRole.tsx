import React from 'react';

const jobRolesData = [
  {
    id: 'it-roles',
    roles: [
      { name: 'Full Stack Developer', count: '81.8K+', url: '#full-stack-developer-jobs?src=popular_roles_pwa_homepage_srch' },
      { name: 'Engineering Manager', count: '1.6K+', url: '#engineering-manager-jobs?src=popular_roles_pwa_homepage_srch' },
      { name: 'Business Analyst', count: '267.4K+', url: '#business-analyst-jobs?src=popular_roles_pwa_homepage_srch' },
      { name: 'UI / UX Designer', count: '1.7K+', url: '#ui-ux-designer-jobs?src=popular_roles_pwa_homepage_srch' },
      { name: 'Brand Management', count: '580', url: '#jobs-in-india?src=popular_roles_pwa_homepage_srch&roleTypeGid=420' },
      { name: 'Project Manager - Manufacturing', count: '1.1K+', url: '#jobs-in-india?src=popular_roles_pwa_homepage_srch&roleTypeGid=494' },
    ],
  },
  {
    id: 'tech-and-management-roles',
    roles: [
      { name: 'Mobile / App Developer', count: '3.1K+', url: '#mobile-application-development-jobs?src=popular_roles_pwa_homepage_srch' },
      { name: 'Technical Lead', count: '11K+', url: '#technical-lead-jobs?src=popular_roles_pwa_homepage_srch' },
      { name: 'Data Scientist', count: '1.4K+', url: '#data-scientist-jobs?src=popular_roles_pwa_homepage_srch' },
      { name: 'Branch Manager', count: '366', url: '#branch-manager-jobs?src=popular_roles_pwa_homepage_srch' },
      { name: 'Key Account Manager', count: '3.7K+', url: '#jobs-in-india?src=popular_roles_pwa_homepage_srch&roleTypeGid=555' },
      { name: 'Construction / Site Supervisor', count: '1.7K+', url: '#jobs-in-india?src=popular_roles_pwa_homepage_srch&roleTypeGid=681' },
    ],
  },
  {
    id: 'specialized-roles',
    roles: [
      { name: 'DevOps Engineer', count: '3.2K+', url: '#devops-engineer-jobs?src=popular_roles_pwa_homepage_srch' },
      { name: 'Automation Test Engineer', count: '3.2K+', url: '#automation-test-engineer-jobs?src=popular_roles_pwa_homepage_srch' },
      { name: 'Product Manager', count: '1.3K+', url: '#product-manager-jobs?src=popular_roles_pwa_homepage_srch' },
      { name: 'Functional Consultant', count: '4.9K+', url: '#functional-consultant-jobs?src=popular_roles_pwa_homepage_srch' },
      { name: 'Public Relations', count: '1.1K+', url: '#jobs-in-india?src=popular_roles_pwa_homepage_srch&roleTypeGid=401' },
      { name: 'Research Associate / Engineer', count: '542', url: '#jobs-in-india?src=popular_roles_pwa_homepage_srch&roleTypeGid=1171' },
    ],
  },
];

const JobsByRole = () => {
  return (
    <div className="w-full rounded-lg bg-gray-50 p-4 font-sans dark:bg-gray-900 sm:p-6">
      <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-white sm:mb-6 sm:text-2xl">
        Jobs by role
      </h2>
      <div className="-mx-4 flex space-x-0 overflow-x-auto px-4 pb-4">
        <div className="flex shrink-0 flex-col space-y-3 sm:space-y-4">
          { }
          {jobRolesData.map(row => (
            <div key={row.id} className="flex space-x-2 sm:space-x-3">
              {row.roles.map(role => (
                <a
                  key={role.url}
                  href={role.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white px-4 py-2 transition-all duration-300 ease-in-out hover:border-blue-500 hover:bg-blue-50 dark:border-gray-600 dark:bg-gray-800 dark:hover:border-blue-400 dark:hover:bg-gray-700"
                >
                  <span
                    className="whitespace-nowrap text-xs font-medium text-gray-700 group-hover:text-blue-600 dark:text-gray-300 dark:group-hover:text-blue-400 sm:text-sm"
                  >
                    {role.name}
                  </span>
                  <span
                    className="ml-1.5 whitespace-nowrap text-xs text-gray-500 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-400 sm:text-sm"
                  >
                    (
                    {role.count}
                    )
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsByRole;
