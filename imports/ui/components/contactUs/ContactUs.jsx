import React, { Component } from 'react';

export default class ContactUs extends Component {
    render() {
        return (
            <section id="contact-us">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="section-title" >
                                <h2>You have a Project to discuss</h2>
                                <p>Please feel free to contact us to discuss further.</p>
                            </div>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div>
                                <form id="contact-form">
                                    <div class="col-md-4 col-sm-4">
                                        <input type="text" class="form-control" name="name" placeholder="Name"/>
                                    </div>
                                    <div class="col-md-4 col-sm-4">
                                        <input type="email" class="form-control" name="email" placeholder="Email"/>
                                    </div>
                                    <div class="col-md-4 col-sm-4">
                                        <input type="text" class="form-control" name="name" placeholder="Subject"/>
                                    </div>
                                    <div class="col-md-12 col-sm-12">
                                        <textarea class="form-control" rows="5" name="message" placeholder="Message"></textarea>
                                    </div>
                                    <div class="col-md-offset-9 col-md-3 col-sm-offset-3 col-sm-6">
                                        <button id="submit" type="submit" class="form-control" name="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}