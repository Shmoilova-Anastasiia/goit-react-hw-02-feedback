import React from "react";
import PropTypes from 'prop-types';
import { Title, Section } from './Section.styled';

export const SectionFeedback = ({ title, children }) => {
    return(
        <Section>
            <Title>{title}</Title>
            <>{ children }</>
        </Section> 
    )
}

SectionFeedback.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};