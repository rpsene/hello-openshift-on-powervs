# hello-openshift-on-powervs

To deploy this app, follow this steps:

```
APP_NAME=hello-world-powervs-app
oc login
oc new-project $APP_NAME
oc new-app --name $APP_NAME https://github.com/rpsene/hello-openshift-on-powervs.git
oc get svc -n $APP_NAME
oc get pods -n $APP_NAME
oc create route edge --service=$APP_NAME -n $APP_NAME
URL=$(oc get route -n $APP_NAME -o json | jq -r '.items[].spec.host')
curl -k $URL
oc get all -l app=$APP_NAME -o name -n $APP_NAME
oc delete all -l app=$APP_NAME -n $APP_NAME
```