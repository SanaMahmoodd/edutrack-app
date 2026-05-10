import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Page,
  Container,
  Header,
  Title,
  Subtitle,
  Grid,
} from "../ui/PageLayout";

import { StudentHeaderCard } from "../ui/StudentUI";

import {
  PageGrid,
  InfoCard,
  CardTitle,
  CardText,
  Row,
  Label,
  Value,
  BigValue,
} from "../ui/PagesUI";

export default function Settings() {
  return (
    <Page>
      <Navbar />

      <Container>
        <StudentHeaderCard>
          <Header>
            <Title>
              Settings
            </Title>

            <Subtitle>
              Manage system configuration,
              security status,
              API environment,
              and application preferences
              from one place.
            </Subtitle>
          </Header>

          <Grid>
            <InfoCard>
              <CardTitle>
                System Mode
              </CardTitle>

              <BigValue>
                Live
              </BigValue>

              <CardText>
                The application is deployed
                and ready for production
                usage.
              </CardText>
            </InfoCard>

            <InfoCard>
              <CardTitle>
                Security
              </CardTitle>

              <BigValue>
                Active
              </BigValue>

              <CardText>
                Protected routes and
                authentication flow are
                enabled.
              </CardText>
            </InfoCard>

            <InfoCard>
              <CardTitle>
                API Health
              </CardTitle>

              <BigValue>
                Connected
              </BigValue>

              <CardText>
                External API requests are
                handled through Axios client.
              </CardText>
            </InfoCard>
          </Grid>
        </StudentHeaderCard>

        <PageGrid>
          <InfoCard>
            <CardTitle>
              Profile Settings
            </CardTitle>

            <Row>
              <Label>
                Account Type
              </Label>

              <Value>
                Admin
              </Value>
            </Row>

            <Row>
              <Label>
                Access Level
              </Label>

              <Value>
                Full Access
              </Value>
            </Row>

            <Row>
              <Label>
                Session
              </Label>

              <Value>
                Protected
              </Value>
            </Row>
          </InfoCard>

          <InfoCard>
            <CardTitle>
              Theme Preferences
            </CardTitle>

            <Row>
              <Label>
                Mode
              </Label>

              <Value>
                Dark Luxury
              </Value>
            </Row>

            <Row>
              <Label>
                Primary Color
              </Label>

              <Value>
                Gold
              </Value>
            </Row>

            <Row>
              <Label>
                Layout
              </Label>

              <Value>
                Responsive
              </Value>
            </Row>
          </InfoCard>

          <InfoCard>
            <CardTitle>
              API Configuration
            </CardTitle>

            <Row>
              <Label>
                Connection
              </Label>

              <Value>
                Live
              </Value>
            </Row>

            <Row>
              <Label>
                Authorization
              </Label>

              <Value>
                Bearer Token
              </Value>
            </Row>

            <Row>
              <Label>
                Interceptor
              </Label>

              <Value>
                Enabled
              </Value>
            </Row>
          </InfoCard>

          <InfoCard>
            <CardTitle>
              Environment
            </CardTitle>

            <Row>
              <Label>
                Base URL
              </Label>

              <Value>
                Configured
              </Value>
            </Row>

            <Row>
              <Label>
                Build
              </Label>

              <Value>
                Production
              </Value>
            </Row>

            <Row>
              <Label>
                Deployment
              </Label>

              <Value>
                Vercel
              </Value>
            </Row>
          </InfoCard>
        </PageGrid>
      </Container>

      <Footer />
    </Page>
  );
}