
<img src="./extra/logo.png" width="300">

![GitHub License](https://img.shields.io/github/license/open-suite/hub?style=flat-square)
![Docker Pulls](https://img.shields.io/docker/pulls/opensuite/hub?style=flat-square)
![Codacy grade](https://img.shields.io/codacy/grade/51108f51c81444fda5da0f0316cb8b55?style=flat-square)

Open Suite is a interconnected business suite used for everything from customer managment to project managment, fully open-source and self-hosted with the ability to only use what is required.


## Features

- 🎨 **Customisable**: Customise your instance of open suite to best reflect your organisations operations.
- 📦 **Componentised**: Only use what you need, either download a official component, community componment or create one yourself.
- 📖 **Open-source**: All code is free and open-source forever, we will never put a price on extra features.
- ♾️ **Unlimited users**: No limit on users, and certently no fee for more users.

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

<br>

> [!NOTE]
> Once running you can access and configure OpenSuite.
> 
> Dashboard accessible at <http://localhost:8008> \
> Default Login: `root@example.com` | `toor`

## Support

If you have general questions about OpenSuite, want to say hello or just follow along, we'd like to invite you to message on our [Gituhb Discussions](https://github.com/orgs/open-suite/discussions).

If you run into any problems or issues, please create a Github issue and we'll try our best to help.

We strive to provide good support through our issue trackers on Github. 

## Contributing

See our "Getting-Started" guide for instructions on [development setup](https://github.com/open-suite/getting-started).

We ❤️ contributions big or small, check out our [guide on how to get started](https://github.com/open-suite/getting-started).

Not sure where to start? [Ask on our discussions page](https://github.com/orgs/open-suite/discussions).

### Contributors

<a href="https://github.com/open-suite/hub/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=open-suite/hub" />
</a>


## License

This project uses the [Apache v2 license](LICENSE). The core Karrio platform will always remain open and free.

Any other questions, mail us at <reeceharris@duck.com> We’d love to meet you!


### Become a sponsor

<a href="https://github.com/sponsors/notreeceharris" target="_blank"><img alt="New Sponsor" src="extra/become-a-sponsor.png" /></a>