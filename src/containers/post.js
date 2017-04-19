import React, {Component} from 'react';
import {withRouter} from 'react-router';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {graphql} from 'react-apollo';
import {Grid, Row, Col} from 'react-bootstrap';
import {browserHistory} from 'react-router';

import {fetchPost} from '../components/req'

class AllPost extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    render() {
        if (this.props.data.loading) {
            return (<div className="loader"/>);
        };
        if (this.props.data.error) {
            return (
                <div className="isError">
                    <div>
                        Brak połączenia z serwerem.
                    </div>
                    <Button bsStyle="primary " onClick={browserHistory.goBack}>Wróć</Button>
                </div>
            )
        };
        // Article validator - api sometimes responds with an empty array
        var art = "";
        if (this.props.data.article.body[0]) {
            art = this.props.data.article.body[0].data;
        } else {
            art = "Api nie zwróciło treści artykułu. Aby się z nim zapoznać skorzystaj z przycisku z odnośnikiem do strony z artykułem"
        };
        return (
            <Grid>
                <div className="animate-bottom">
                    <Row>
                        <Button bsStyle="primary" onClick={browserHistory.goBack}>Wróć</Button>
                        <a href={this.props.data.article.url}>
                            <Button bsStyle="success">Link do artykułu</Button>
                        </a>
                    </Row>
                    <Row className="image">
                        <img src={this.props.data.article.img.url} alt={this.props.data.article.title}/>
                    </Row>
                    <Row>
                        <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={10} mdOffset={1}>
                            <h2>{this.props.data.article.title}</h2>
                            <p>{art}</p>
                        </Col>
                    </Row>
                </div>
            </Grid>
        );
    };
};

const AllPostFetched = graphql(fetchPost(), {
    options: (ownProps) => ({
        variables: {
            id: ownProps.params.id.replace(/===/g, "/")
        }
    })
})(withRouter(AllPost));
export default AllPostFetched;
