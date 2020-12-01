# REST-API(s) for Word Cloud

The project comprises of categorical REST-API(s) interacting with Kafka and RedisDB which are following :

## Kafka _Publisher-Subscriber_ REST-API(s) :

- GET API(s):

  - `/consume` :

    - _functionality :_ This API consume the messages stored in the _Kafka Topic_ and connects to the external API(s) / UI.

- POST API(s):

  - `/producer` :

    - _functionality :_ This API connects the external API(s)/ UI and publishes messages on the _Kafka Topic_ .

_Note Messages here are real time streaming data assumed to be coming from a chat application._
