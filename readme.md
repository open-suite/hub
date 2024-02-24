
<img src="./extra/logo.svg" width="300" alt="Open Suite">

![GitHub License](https://img.shields.io/github/license/open-suite/hub?style=flat-square)
![Docker Pulls](https://img.shields.io/docker/pulls/opensuite/hub?style=flat-square)
![Codacy grade](https://img.shields.io/codacy/grade/51108f51c81444fda5da0f0316cb8b55?style=flat-square)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/open-suite/hub/github-code-scanning%2Fcodeql?style=flat-square&label=codeql)



Open Suite is an interconnected business suite designed for diverse functions ranging from customer management to project management. It is fully open-source and self-hosted, offering the flexibility to utilize only the necessary components.

## Features

- 🎨 **Customisable**: Tailor your instance of Open Suite to match your organization's operations seamlessly.
- 📦 **Componentised**: Select only the components you need; choose from official, community, or self-created components.
- 📖 **Open-source**: All code is perpetually free and open-source; there will never be a charge for additional features.
- ♾️ **Unlimited users**: No user limits, and absolutely no fees for additional users.

## Get started

### Dependencies

Before getting started with Open Suite, ensure you have the following dependencies installed:

- [Node.js v20.x](https://nodejs.org/download/release/latest-v20.x/): Node.js is required for running Open Suite.
- [Docker Compose](https://docs.docker.com/compose/install/): If you plan on using Docker, make sure you have the latest version of Docker Compose installed.

### Install

Get OpenSuite up and running in under 5 minutes with just one simple command, This command automatically downloads and executes the setup script from the OpenSuite GitHub repository:

```sh
curl -s https://raw.githubusercontent.com/open-suite/hub/main/setup.sh | bash
```

Here are the manual installation instructions for Open Suite, These commands will clone the Open Suite repository from GitHub, navigate to the docker directory within the cloned repository, and then start the Docker containers using Docker Compose:

```sh
git clone https://github.com/open-suite/hub
cd hub/docker
docker compose up
```

> [!NOTE]
> Once running you can access and configure OpenSuite.
> 
> Dashboard accessible at <http://localhost:8008> \
> Default Login: `root@example.com` | `toor`

## Support

If you have general questions about OpenSuite, want to say hello, or simply follow along, we invite you to join our [GitHub Discussions](https://github.com/orgs/open-suite/discussions).

Should you encounter any problems or issues, please create a GitHub issue, and we'll do our best to assist you.

We aim to deliver excellent support through our GitHub issue trackers.

## Contributing

Explore our "Getting Started" guide for instructions on setting up your [development environment](https://github.com/open-suite/getting-started).

We welcome contributions of all sizes! Check out our [guide on how to get started](https://github.com/open-suite/getting-started).

Unsure where to begin? Feel free to ask on our [discussions page](https://github.com/orgs/open-suite/discussions).

### Contributors

[![Contributors](https://contrib.rocks/image?repo=open-suite/hub)](https://github.com/open-suite/hub/graphs/contributors)

## License

This project is licensed under the [Apache v2 license](LICENSE). The core OpenSuite platform will always remain open and free.

For any further questions, feel free to email us at <reeceharris@duck.com>. We'd love to hear from you!

### Become a sponsor

[![become a sponsor](extra/become-a-sponsor.png)](https://github.com/sponsors/notreeceharris)
