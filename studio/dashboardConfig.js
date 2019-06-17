export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d07e214fc9620cd675a7903',
                  title: 'Sanity Studio',
                  name: 'mbe-studio',
                  apiId: '36dbf077-dcd3-4cd1-aa9a-dec252c72b84'
                },
                {
                  buildHookId: '5d07e2143100be21a80e89fc',
                  title: 'Blog Website',
                  name: 'mbe',
                  apiId: '97d3731e-e252-4a35-80c7-f6d5542e3e6b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/EdwardGoomba/mbe',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://mbe.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
