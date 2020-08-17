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
                        <Form onSubmit={this.handleSubmit}>
                            <FormLayout>
                                <TextField
                                  value={discount}
                                  onChange={this.handleChange('discount')}
                                  label="Discount percentage"
                                  type="discount"
                                />
                                <Stack distribution="trailing">
                                    <Button primary submit>
                                        Save
                                    </Button>
                                </Stack>
                            </FormLayout>
                        </Form>
                    </Card>
                    </Layout.AnnotatedSection>
                </Layout>
            </Page>
        )
    };
};

export default AnnotatedLayout;

