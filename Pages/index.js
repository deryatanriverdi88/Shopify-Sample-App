import { EmptyState, Layout, Page} from '@shopify/polaris';

const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

const Index = () => (
    <Page>
        <Layout>
            <EmptyState
              heading="Discount your products temporarily"
              action={{
                  content: 'Select products',
                  onAction: () => console.log('clicked'),
              }}
              image={ img }
            >
                <p>
                   Sample app using React and Next.js
                </p>
            </EmptyState>
        </Layout>
    </Page>
);

export default Index;