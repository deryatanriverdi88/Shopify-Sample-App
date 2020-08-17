import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    Stack,
    TextField
} from '@shopify/polaris';

class AnnotatedLayout extends React.Component {
    state = {
        discount: '10%'
    };

    render() {
        const { discount } = this.state;
        return (
            <Page>
                <Layout>
                    <Layout.AnnotatedSection
                    title="Default discount"
                    description="Add a product to Sample App, it will automatically be discounted."
                    >
                    <Card sectioned>
                        <div>Card</div>
                    </Card>
                    </Layout.AnnotatedSection>
                </Layout>
            </Page>
        )
    };
};

export default AnnotatedLayout;

