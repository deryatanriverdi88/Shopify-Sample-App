import {
    Button,
    Card,
    Form,
    FormLayout,
    Layout,
    Page,
    SettingToggle,
    Stack,
    TextField,
    TextStyle
} from '@shopify/polaris';

class AnnotatedLayout extends React.Component {
    state = {
        discount: '10%',
        enabled: false
    };

    render() {
        const { discount, enabled } = this.state;
        const contentStatus = enabled ? 'Disable' : 'Enable';
        const textStatus = enabled ? 'enabled' : 'disabled';

        return (
            <Page>
                <Layout>
                    <Layout.AnnotatedSection
                       title="Price updates"
                       description="Temporarily disable all Sample App price updates"
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
                    <SettingToggle
                       action={{
                           content: contentStatus,
                           onAction: this.handleToggle
                       }}
                       enabled={enabled}
                    >
                        This setting is {' '}
                        <TextStyle variation="strong">{textStatus}</TextStyle>
                    </SettingToggle>
                    </Layout.AnnotatedSection>
                </Layout>
            </Page>
        )
    };

    handleSubmit = () => {
        this.setState({
            discount: this.state.discount
        });
        console.log('submission', this.state);
    };

    handleChange = (field) => {
        return (value) => this.setState({[field]: value});
    };
};

export default AnnotatedLayout;

