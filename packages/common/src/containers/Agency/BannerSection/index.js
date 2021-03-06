import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Box from 'reusecore/src/elements/Box';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Text from 'reusecore/src/elements/Text';

import ShopifyImage from '../../../assets/image/agency/Shopify-App-Store-Badge-Final-White.png';
import FeatureBlock from '../../../components/FeatureBlock';
import Container from '../../../components/UI/Container';
import Particles from '../../Agency/Particle';
import BannerWrapper, { DiscountLabel } from './bannerSection.style';

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle
}) => {
  const ButtonGroup = () => (
    <Fragment>
      {/* <Button title="LEARN MORE" {...btnStyle} /> */}
      {/* <Button
        title="WATCH WORKS"
        variant="textButton"
        icon={<i className="flaticon-next" />}
        {...outlineBtnStyle}
      /> */}
      <Image
        src={ShopifyImage}
        alt="Shopify"
        onClick={() => {
          window.open(
            'https://apps.shopify.com/ios-android-app-maker-appit', //TODO: change this url
            '_blank'
          );
        }}
      />
    </Fragment>
  );
  return (
    <BannerWrapper>
      <Particles />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            <DiscountLabel>
              <Text content="25% Discount" {...discountAmount} />
              <Text content="on every first project budget" {...discountText} />
            </DiscountLabel>
            <FeatureBlock
              title={
                <Heading
                  content="Shopify Apps to Grow Your Business"
                  {...title}
                />
              }
              description={
                <Text
                  content="Need extra functionality? You’ve got the will. We’ve got the way. Our Intelligent Shopify Apps are designed to help with marketing, conversions, sales, and more."
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center'
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '70%', '60%', '50%']
  },
  title: {
    fontSize: ['26px', '34px', '42px', '55px'],
    fontWeight: '300',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31'
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '2.1',
    mb: '0'
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '14px',
    fontWeight: '500'
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '14px',
    fontWeight: '500',
    color: '#0f2137',
    p: '5px 10px'
  },
  discountAmount: {
    fontSize: '14px',
    color: '#10AC84',
    mb: 0,
    as: 'span',
    mr: '0.4em'
  },
  discountText: {
    fontSize: '14px',
    color: '#0f2137',
    mb: 0,
    as: 'span'
  }
};

export default BannerSection;
